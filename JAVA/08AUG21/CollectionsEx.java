package com.company;
import java.util.*;
import static java.util.Collections.*;

public class Main {
    public static void main(String[] args) {
        List list = new ArrayList ();
        System.out.println(list);

        Collections.addAll(list, 1,2,3,4,5);    // 값 추가
        System.out.println(list);

        Collections.rotate(list, 2);    // 오른쪽으로 2번 이동
        System.out.println(list);

        Collections.swap(list, 0,2);    // list[0]과 list[2]를 교환
        System.out.println(list);

        Collections.shuffle(list);      // list 값을 마음대로 섞는다.
        System.out.println(list);

        Collections.sort(list, reverseOrder()); // 위와 반대로 역순 정렬
        System.out.println(list);

        Collections.sort(list);     // list 값을 순차적으로 정렬한다.
        System.out.println(list);

        int num = Collections.binarySearch(list,3); // index 찾기  ( 이진숫자찾기 메서드는 항상 list의 정렬이 필수임!! )
        System.out.println(num);

        System.out.println("Max = " + Collections.max(list));  // 최대값
        System.out.println("Min = " + Collections.min(list));  // 최소값

        Collections.fill(list, 9);  // list 값을 전부 9로 바꾼다
        System.out.println(list);

        List newlist = Collections.nCopies(list.size(),2);  // list와 같은 크기의 배열을 생성하고 숫자도 9로 채운다.
        System.out.println("newlist = " + newlist);

        System.out.println(Collections.disjoint(list, newlist));    // 공통요소가 없을때 true를 반환

        Collections.copy(list, newlist);    // newlist의 값을 list로 복사함
        System.out.println("list = " + list);
        System.out.println("newlist = " + newlist);

        Collections.replaceAll(list,2,1);   // list의 값 중에 하나인 2를 전부 1로 바꾼다.
        System.out.println(list);

    }
}
