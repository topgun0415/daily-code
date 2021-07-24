import java.util.*;

public class Main {
	public static void main (String [] args) {
			
		ArrayList Al = new ArrayList (2000000);
		LinkedList Ll = new LinkedList ();
		
		System.out.println("순차적으로 추가하기");
		System.out.println("ArrayList = " + add1(Al));
		System.out.println("LinkedlList = " + add1(Ll));
		
		System.out.println("중간에 추가하기");
		System.out.println("ArrayList = " + add2(Al));
		System.out.println("LinkedlList = " + add2(Ll));
		
		System.out.println("중간에 삭제하기");
		System.out.println("ArrayList = " + add3(Al));
		System.out.println("LinkedlList = " + add3(Ll));
		
		System.out.println("순차적으로 삭제하기");
		System.out.println("ArrayList = " + add4(Al));
		System.out.println("LinkedlList = " + add4(Ll));
		
	}

public static long add1 (List list) { 	
		long start = System.currentTimeMillis();
		for(int i = 0; i < 100000; i++) list.add(i + "");
		long end = System.currentTimeMillis();
		return end - start;
	}

public static long add2 (List list) {
		long start = System.currentTimeMillis();
		for(int i = 0; i < 10000; i++) list.add(500, "X");
		long end = System.currentTimeMillis();
		return end - start;
	}

public static long add3 (List list ) {
		long start = System.currentTimeMillis();
		for(int i = list.size() - 1; i >= 0; i-- ) list.remove(i);
		long end = System.currentTimeMillis();
		return end - start;
	}

public static long add4 (List list) {
		long start = System.currentTimeMillis();
		for(int i = 0; i < 10000; i++) list.remove(i);
		long end = System.currentTimeMillis();
		return end = start;
	}

}
