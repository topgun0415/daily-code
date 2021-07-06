
 
public class ch07Practice {

	public static void main (String [] args ) {
		
		Point3D p = new Point3D () ;
		System.out.println(p.getLocation());
			
	 }
	 
 }
 
class Point {
	
	int x = 1 ;
	int y = 2 ;
	
	String getLocation ( ) {
		
		return " x = " + x + " y = " + y;
	}
	
}

 class  Point3D extends Point {
	 
	 int z = 3;
	 String getLocation () {
		
		//  return " x = " + x + " y = " + y + " z = " + z;  조상 메서드의 오버라이딩의 가장 기본적인 예시 
		
		 return super.getLocation()  +  " z = " + z;  // 조상의 메서드 호출을 super ( ) 생성자로 더 쉽게 호출할 수 있음 그리고 조상클래스의 메서드의 내용에 추가적으로 작업을 덧붙이는 경우라면 이처럼 super를 사용해서 조상클래스의 메서드를 포함시키는 것이 좋다.
																				//  후에 조상클래스의 메서드가 변경되더라도 변경된 내용이 자손클래스의 메서드에 자동적으로 반영 될 것이기 때문이다
	 }
	 
 }
 
 
 
 
	
 
