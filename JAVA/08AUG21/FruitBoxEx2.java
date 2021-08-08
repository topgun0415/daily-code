package com.company;
import java.util.*;

class Fruit { public String toString() { return "Fruit"; }}
class Apple extends Fruit { public String toString() { return "Apple"; }}
class Grape extends Fruit { public String toString() { return "Grape"; }}
class Toy { public String toString() { return "Toy"; }}

public class Main {
    public static void main(String[] args) {
        // FruitBoxEx1
        Box<Fruit> fruitBox = new Box<Fruit>();
        Box<Apple> appleBox = new Box<>();  // JDK 1.7부터 <Apple> 생략가능
        Box<Toy> toyBox = new Box<Toy>();
//      Box<Grape>  grapeBox = new Box<Apple>(); 에러 발생 : 타입 불일치

        fruitBox.add(new Fruit());
        fruitBox.add(new Apple());

        appleBox.add(new Apple());
        appleBox.add(new Apple());
//      appleBox.add(new Toy());    에러 발생 : 애플박스에는 애플만 넣을수있음

        toyBox.add(new Toy());
//      toyBox.add(new Apple()); 에러 발생 : 위와 마찬가지로 토이박스에는 토이만 넣을 수 있음

        System.out.println("fruitBox = " + fruitBox);
        System.out.println("appleBox = " + appleBox);
        System.out.println("toyBox = " + toyBox);
    }
}

class Box<T> {
    ArrayList <T> list = new ArrayList<T>();

    void add(T item) { list.add(item); }
    T get(int i) { return list.get(i); }
    int size() { return list.size(); }
    public String toString() { return list.toString(); }

}
