package com.company;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        
        // 간단한 로그인 할수있는 코드 짜보기
        HashMap map = new HashMap ();
        map.put("Master", "0000");
        map.put("Philip", "tjdrP7419@");
        map.put("Hime", "glap0510");

        Scanner scanner = new Scanner(System.in);

        while(true) {
            System.out.println("ID와 PASSWORD를 입력해주세요");
            System.out.println("ID =");
            String ID = scanner.nextLine().trim();

            System.out.println("PASSWORD =");
            String PASSWORD = scanner.nextLine().trim();
            System.out.println();

            if(!map.containsKey(ID)) {
                System.out.println("입력하신 ID가 존재하지 않습니다. " + "다시 입력 하십시오!");
                continue;   // continue문은 반복문이 진행되는 도중에 continue를 만날 경우, 반복문의 끝으로 이동하여 다음 반복을 이어간다.
            }
            else {
                if(!(map.get(ID).equals(PASSWORD))) {
                    System.out.println("입력하신 PASSWORD가 일치하지 않습니다. " + "다시 입력 하십시오!");

            } else {
                    System.out.println("로그인 완료");
                    break;
                }
            }
        }   // while문
    }
}
