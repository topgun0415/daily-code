import java.util.*;

public class Main {
	public static void main (String [] args) {
			
		// 간단한 equals 와 == 값 실험
		String a = "ABC";
		String b = "ABC";
		System.out.println(a.equals(b));
		System.out.println(a==b);
		
		String c = new String ("ABC");
		String d = new String ("ABC");
		System.out.println(c.equals(d));	// 다른 주소값을 가지고 있어도 생성자 안에 있는 글자를 보고 true 라는 결과가 나옴
		System.out.println(c==d);	// 다른 주소값을 가지고 있기에 false가 출력 
				
	
		HashSet setA = new HashSet ();
		HashSet setB = new HashSet ();
		HashSet setHab = new HashSet ();
		HashSet setKyo = new HashSet ();
		HashSet setCha = new HashSet ();
		
		setA.add("1"); setA.add("2"); setA.add("3");
		setA.add("4"); setA.add("5"); 
		System.out.println("setA = " + setA);
		
		setB.add("4"); setB.add("5"); setB.add("6");
		setB.add("7"); setB.add("8");
		System.out.println("setB = " + setB);
		
		Iterator it = setB.iterator();
		while(it.hasNext()) {
			Object tmp = it.next();
			if(setA.contains(tmp)) {
				setKyo.add(tmp);
			}
		}
		
		it = setA.iterator();
		while(it.hasNext()) {
			Object tmp = it.next();
			if(!setA.contains(tmp)) {
				setCha.add(tmp);
			}
		}
		
		it = setB.iterator();
		while(it.hasNext()) {
			setHab.add(it.next());
		}
		
		System.out.println(" A ∩ B = " + setKyo );
		System.out.println(" A ∪ B = " + setHab);
		System.out.println(" A - B = " +setCha);
		
		
	}
	
}




