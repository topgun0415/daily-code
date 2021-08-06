package com.company;
import java.util.*;

public class Main {

    public static void main(String[] args) {

       TreeSet set = new TreeSet();
       int [] score = { 25 , 95 , 80 , 75 , 50 , 58 , 21 , 100 , 99 };

       for (int i = 0; i < score.length; i++) {
           set.add(score[i]);
       }
        System.out.println("set [] = " + set);
        System.out.println("50보다 작은값 = " + set.headSet(50));
        System.out.println("50보다 큰값 = " + set.tailSet(50));
    }

}
