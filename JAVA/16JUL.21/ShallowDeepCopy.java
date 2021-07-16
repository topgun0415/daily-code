import java.util.*;

public class Main {

	public static void main(String[] args) {
		
		Circle c1 = new Circle (new Point(1,2), 2.0);
		Circle c2 =  c1.shallowCopy();
		Circle c3 =  c1.DeepCopy();
		
		System.out.println("c1 = " + c1);    //  출력값 : [p= (1,2),  r = 2.0]
		System.out.println("c2 = " + c2);    //  출력값 : [p= (1,2),  r = 2.0]
		System.out.println("c3 = " + c3);	 //  출력값 : [p= (1,2),  r = 2.0]
		
		c1.p.x = 9;
		c1.p.y = 10;
		
		System.out.println("c1 = " + c1);    //  출력값 : [p= (9,10),  r = 2.0]
		System.out.println("c2 = " + c2);    //  출력값 : [p= (9,10),  r = 2.0]
		System.out.println("c3 = " + c3);	 //  출력값 : [p= (1,2),  r = 2.0]
	
	}
	
}

class Point {
	int x ;
	int y ;
	
	
	Point (int x , int y) {
		this.x = x;
		this.y = y;
	}
	
	public String toString () {
		return "(" + x + ",  " + y + ")";
	}		
	
}					// 포인트 클래스 끝


class Circle implements Cloneable {
	
	Point p;  
	double d; 
	
	Circle (Point p, double d) {
		this.p = p;
		this.d = d;	
	}
	
	public Circle shallowCopy () {		// 얉은 clone 메서드
		Object obj = null;
		
		try {
			obj = super.clone();
		} 
		catch (Exception e) { 
		}
		return (Circle) obj;
			
		}
	
	public Circle DeepCopy () {			// 깊은 clone 메서드
		Object obj = null;
		
		try {
			obj = super.clone();
		}
		catch(Exception E) { 
		}
	
		Circle c = (Circle) obj;
		c.p = new Point (this.p.x, this.p.y);
		return c;
	}
	
	public String toString () {
		return " [p= (" + p + ",    r =" + d + "]";
	}
	
}
