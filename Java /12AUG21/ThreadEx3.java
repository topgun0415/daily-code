package com.company;

public class Main {
    public static void main(String[] args) {
        ThreadEx3 t1 = new ThreadEx3 ();
        t1.run();       // 이전 예제와 달리 새로운 쓰레드가 생성되지 않고 , ThreadEx3에 있는 run() 을 호출한것뿐임 

    }

}

class ThreadEx3 extends Thread {
    public void run () {
        throwException();
    }

    public void throwException () {
        try {
            throw new Exception();
        } catch(Exception e) {
            e.printStackTrace();
        }
    }
}
