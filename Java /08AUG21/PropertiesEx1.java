package com.company;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Properties prop = new Properties();

        // prop에 키와 값 (key , value)을 저장한다.
        prop.setProperty("timeout", "30");
        prop.setProperty("language", "kr");
        prop.setProperty("size", "10");
        prop.setProperty("capacity", "10");

        // prop에 저장된 요소들을 Enumeration을 이용해서 출력한다.
        Enumeration e = prop.propertyNames();

        while(e.hasMoreElements()) {
            String element = (String)e.nextElement();
            System.out.println(element + "=" + prop.getProperty(element));
        }

        System.out.println();
        System.out.println("(변경전)size=" + prop.getProperty("size"));
        prop.setProperty("size", "20"); // size의 value값을 10에서 20으로 변경
        System.out.println("size=" + prop.getProperty("size"));
        prop.setProperty("language", "jp"); // language의 value값을 kr에서 jp로 변경
        System.out.println("capacity=" + prop.getProperty("capacity", "20"));   // getProperty에서 바꾸더라도 기존값에는 영향을 끼치지 못한다 
        System.out.println("loadfactor=" + prop.getProperty("loadfactor", "0.75"));
        System.out.println();

        System.out.println(prop);
        prop.list(System.out);

    }
}
