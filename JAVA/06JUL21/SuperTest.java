
 
public class ch07Practice {

	public static void main (String [] args ) {
	
		// Super 생성자 : super는 자손 클래스에서 조상 클래스로부터 상속받은 맴버를 참조하는데 사용되는 참조변수이다. 맴버변수와 지역변수의 이름이 같을 때 this를 붙여서 구별했듯이 상속받은 멤버와 자신의 맴버와 이름이 같을 때는 super 를 붙여서 구별할 수 있다.
		// ★ 조상 클래스로부터 상속받은 맴버도 자손 클래스 자신의 맴버이므로 super 대신 this를 사용할 수 있지만 조상 클래스의 맴버와 자손 클래스의 맴버가 중복 정의되어 서로 구별 해주어야 하는 경우에만 super를 사용하는 것이 좋다. ★
		
		
		Child c = new Child ();
		c.method();
		
		
	 }
	 
 }
 
 class Parent { int x = 1; }
 
 class Child extends Parent  {
	 
	 int  x = 2;
	 
	 void method () {
		 
		 System.out.println("super.x = " + super.x);   // 1이 호출됨 ( 즉 Parent 의 맴버변수를 가지고 오게 됨 )
		 System.out.println("this.x = " +  this.x); 	// 2가 호출되며 현재 Child class의 맴버변수를 가지고옴
		 System.out.println("x = " + x);	// Child class에서 x를 호출하니 Parent 것이 아닌 Child 의 맴버 변수값을 가지고 왔음
		 
	 }
	 
	 
 }
 
 
 
 
 
 
	
 
