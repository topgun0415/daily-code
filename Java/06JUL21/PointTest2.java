
 
public class ch07Practice {

	public static void main (String [] args ) {
		
		Point3D P3D = new Point3D (100,200,300);
		
		System.out.println("P3D.x = " + P3D.x);
		System.out.println("P3D.y = " + P3D.y);
		System.out.println("P3D.z = " + P3D.z);
		
	 }
	 
 }

class Point extends Object {
	
	int x = 10;
	int y = 20;

	Point ( int x , int y ) {
		// super ();
		this.x = x;
		this.y = y;
	}
	
}

class Point3D extends Point {
	
	int z = 30;
	
//	Point3D () {
//		
//		this(100, 200, 300);   // Point3D (int x , int y, int z ) 생성자를 호출 
//	}
	
	Point3D (int x, int y, int z) {
		
		super(x, y);
		this.z = z;
		
	}
		
}
