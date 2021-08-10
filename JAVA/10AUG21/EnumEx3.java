package com.company;
import java.util.*;

enum Transportation {
    BUS (100) {
        int fare(int distance)
        { return distance*BASIC_FARE;}
    },
    TRAIN (150) {
        int fare(int distance)
        { return distance*BASIC_FARE;}
    },
    SHIP (100) {
        int fare(int distance)
        { return distance*BASIC_FARE;}
    },
    AIRPLANE (300) {
        int fare(int distance)
        { return distance*BASIC_FARE;}
    };
     protected final int BASIC_FARE;

    Transportation (int Basic_fare) {
        this.BASIC_FARE = Basic_fare;
    }

    public int getBasicFare() { return BASIC_FARE; }

    abstract int fare (int distance); // 거리에 따른 요금 계산 추상메서드

}

public class Main {
    public static void main(String[] args) {
        System.out.println("bus fare = " + Transportation.BUS.fare(100));
        System.out.println("train fare = " + Transportation.TRAIN.fare(100));
        System.out.println("ship fare = " + Transportation.SHIP.fare(100));
        System.out.println("airplane fare = " + Transportation.AIRPLANE.fare(100));
        System.out.println(Transportation.AIRPLANE.getBasicFare());
    }

}



