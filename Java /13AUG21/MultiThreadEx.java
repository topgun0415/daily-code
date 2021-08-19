package com.company;

public class Main {
    static long startTime;

    public static void main(String[] args) {
        // 멀티스레드에서 두 가지 작업을 실행했을 경우
        startTime = System.currentTimeMillis();
        MultiThread t1 = new MultiThread();
        t1.start();

        for(int i = 0; i < 300; i++) {
            System.out.printf("%s", new String("-"));
        }
        System.out.println("소요시간 : " + (System.currentTimeMillis() - Main.startTime));

    }

}

class MultiThread extends Thread {
    public void run() {
        for (int i = 0; i < 300; i++) {
            System.out.printf("%s", new String("|"));
        }
        System.out.println("소요시간2 : " + (System.currentTimeMillis() - Main.startTime));
    }
}



