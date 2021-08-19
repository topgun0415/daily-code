package com.company;
import java.util.*;

class Parent {
    void ParentMethod () {}
}

class Child extends Parent {
    @Override       // 에너테이션을 하고 종속을 받은 경우 조상의 메서드를 확인하여 있는지 없는지를 확인
    void ParentMethod () {
        System.out.println("Override Practice");
    }
}

public class Main {
    public static void main(String[] args) {


    }

}



