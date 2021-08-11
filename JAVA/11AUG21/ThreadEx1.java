package com.company;

public class Main {
    public static void main(String[] args) {
        ThreadEx1_1 TEx1 = new ThreadEx1_1();

        Runnable r = new ThreadEx1_2();
        Thread TEx2 = new Thread(r);
        TEx1.start();
        TEx2.start();

    }

}

class ThreadEx1_1 extends Thread {
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(getName());  // 조상인 Threead의 getname()을 호출
        }
    }
}
class ThreadEx1_2 implements Runnable {
    public void run() {
        for (int i = 0; i < 5; i++) {
            // Thread.currentThread () - 현재 실행중인 Thread 를 반환한다.
            System.out.println(Thread.currentThread().getName());
        }
    }
}





