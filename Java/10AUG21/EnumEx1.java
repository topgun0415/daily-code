package com.company;
import java.sql.SQLOutput;
import java.util.*;
//                 0     1     2      3
enum Direction { EAST, WEST, SOUTH, NORTH }

public class Main {
    public static void main(String[] args) {
        Direction d1 = Direction.EAST;
        Direction d2 = Direction.valueOf("WEST");   // 잘 안 쓰임
        Direction d3 = Enum.valueOf(Direction.class, "EAST");      // 잘 안 쓰임

        System.out.println("d1 = " + d1);
        System.out.println("d2 = " + d2);
        System.out.println("d3 = " + d3);

        System.out.println("d1 == d2 = " + (d1 == d2));
        System.out.println("d1 == d3 = " + (d1 == d3));
        System.out.println("d1.equals(d3) = " + d1.equals(d3));
//      System.out.println("d2 > d3 = " + d2 > d3);  Enum에서는 비교연산자 사용 불가능
        System.out.println("d1.compareTo(d3) = " + d1.compareTo(d3));   // 0
        System.out.println("d1.compareTo(d2) = " + d1.compareTo(d2));   // -1

        switch (d2) {
            case EAST: // Direction.East 라고 쓸수없다.
                System.out.println("The Direction is EAST");
                break;
            case WEST:
                System.out.println("The Direction is WEST");
                break;
            case SOUTH:
                System.out.println("The Direction is SOUTH");
                break;
            case NORTH:
                System.out.println("The Direction is NORTH");
                break;
        }

        Direction[] Dirarr = Direction.values();

        for (Direction d : Dirarr)
            System.out.printf("%s=%d%n", d.name(), d.ordinal());

    }

}
