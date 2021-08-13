package com.company;
import javax.swing.JOptionPane;

public class Main {
    public static void main(String[] args) {

        String input = JOptionPane.showInputDialog("아무 값이나 입력하시오");
        System.out.println("입력 하신 값은 (" + input + ") 입니다.");

                for(int i = 10; i > 0; i--) {
                    System.out.println(i);
                    try {
                        Thread.sleep(1000);
                    } catch (Exception e) {
                }
        }
                // 싱글쓰레드로 인풋과 반복문 두 가지 작업을 하려고한다. input을 해야하는 A 작업과 for 문 B 작업 총 2 가지가 있는데 A 작업에서 값을 입력하지 않을 경우에 B 작업은 수행하지 못하고 기다려야하기 때문에 오랜 시간이 걸린다. 
    }
}

