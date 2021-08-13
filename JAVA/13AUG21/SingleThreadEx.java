package com.company;

public class Main {
    public static void main(String[] args) {

        // 싱글스레드에서 두 가지 작업을 실행했을 경우
        long startTime = System.currentTimeMillis();

        for(int i = 0; i < 300; i++) {
            System.out.printf("%s", new String("-"));
        }
        System.out.println("소요시간 : " + (System.currentTimeMillis() - startTime));

        for(int i = 0; i < 300; i++) {
            System.out.printf("%s", new String("|"));

        }
        System.out.println("소요시간2 : " + (System.currentTimeMillis()-startTime));
    }
}
