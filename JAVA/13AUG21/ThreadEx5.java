package com.company;
import javax.swing.JOptionPane;

public class Main {
    public static void main(String[] args) {
        MultiThread t1 = new MultiThread();
        t1.start();

        String input = JOptionPane.showInputDialog("아무 값이나 10초 안으로 입력하시오");
        System.out.println("입력하신 값은 " + input + "입니다.");
    }
}

class MultiThread extends Thread {
    public void run () {
        for(int i = 10; i > 0; i--) {
            System.out.println(i + "초가 남았습니다.");
            try {
                Thread.sleep(1500);
            }
            catch (Exception e) {
            }
        }
    }
}

// 멀티쓰레드로 만들어본 식이다. 싱글쓰레드와 달리 카운터다운이 시작되면서 입력창이 출력되어 두 가지 작업을 동시에 처리할 수 있다.
