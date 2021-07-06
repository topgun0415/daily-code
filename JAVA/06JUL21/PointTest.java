
 
public class ch07Practice {

	public static void main (String [] args ) {
		
		// super ( ) - 조상 클래스의 생성자 :  this ( )와 마찬가지로 super ( ) 역시 생성자지만 this ( )는 같은 클래스의 다른 생성자를 호출하는데 사용되지만 , super ( ) 는 조상 클래스의 생성자를 호출하는데 사용된다.
		
		Point3D p = new Point3D (1, 2, 3);
		System.out.println(p.getLocation());
		
	 }
	 
 }

class Point {
	
		int x; 
		int y; 
	
		Point () {
		};
		
		Point (int x, int y) {
			
			this.x = x;
			this.y = y;
		}
		
		String getLocation () {
			
			return " x : " + x  + " y : " + y ; 
		}
		
}
 
class Point3D extends Point {
	
		int z; 

		Point3D (int x, int y, int z) {
			
			super(x, y);
			this.z = z;
		}
		
		String getLocation () {
			
			return " x : " + x + " y : " + y + " z : " + z;
	
		}
		
}
