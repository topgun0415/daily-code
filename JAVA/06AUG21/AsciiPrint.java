package com.company;
import java.util.*;

public class Main {

    public static void main(String[] args) {

        char ch =' '; // 인텔리제이에서는 ' ' 안에 스페이스로 공백을 만들어주어야함 
        for(int i = 0; i < 95; i++ ) {
            System.out.print(ch++);
        }

    }

}

// 출력값 :  !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~ (첫번째 문자는 공백문자)
