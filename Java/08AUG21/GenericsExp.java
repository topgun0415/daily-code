package com.company;
import java.util.*;
import static java.util.Collections.*;

public class Main {
    public static void main(String[] args) {
        // Generic simple example 1
        ArrayList<Integer> Arrlist = new ArrayList<Integer>();

        Arrlist.add(10);
        Arrlist.add(20);
        Arrlist.add(30);      // 만약 문자열 타입이 아닌 Only Integer 타입의 값을 배열에 넣고 싶을 경우 제네릭 사용
                              // 제네릭을 설정할 경우 문자열의 이 값이 컴파일 에러가 발생함
        Integer i = Arrlist.get(2); // 이 경우에는 이미 제네릭으로 인티져 값을 설정했기 때문에 형변환 불필요
        System.out.println(i);
        System.out.println(Arrlist);
        System.out.println("-------------");

        /* 지네릭스의 장점
        1. 타입 안정성을 제공한다
        2. 타입체크와 형변환을 생략할 수 있으므로 코드가 간결해진다
         */

        Box<String> b = new Box<String>();
    //  b.setItem(new Object());   String타입의 값 이외에는 사용불가
        b.setItem("Remote Controller");
        String box1 = b.getItem();
        System.out.println("String box1 = " + box1);
    }
}

// 지네릭스 클래스의 선언
class Box<T> {
    T item;

    void setItem(T item) { this.item = item; }
    T getItem() { return item; }
}
