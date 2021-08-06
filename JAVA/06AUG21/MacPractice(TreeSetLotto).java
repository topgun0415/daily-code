// 맥OS 인텔리지로 만들어본 TreeSetLotto 연습예제  

package com.company;
import java.util.*;

public class Main {

    public static void main(String[] args) {

        Set set = new TreeSet();

        for (int i = 0; set.size() < 6; i++) {
            int num = (int)(Math.random() * 46);
            set.add(num);
        }
        System.out.println(set);
        // TreeSet은 Set인터페이스를 구현했으므로 중복된 데이터의 저장을 허용하지 않으며 정렬된 위치에 저장하므로 저장순서를 유지하지도 않는다.
    }

}
