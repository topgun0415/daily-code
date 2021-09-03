package com.company;
import java.util.*;

class NewClass {
    int newField;
    int getNewField() { return newField; }

    @Deprecated         // Deprecated가 붙은 변수나 메서드는 되도록이면 사용하지 말자!
    int oldField;

    @Deprecated
    int getOldField() { return oldField; }
}

public class Main {
    public static void main(String[] args) {
        NewClass Nc = new NewClass();
        Nc.oldField = 10;
        System.out.println(Nc.getOldField());

    }

}



