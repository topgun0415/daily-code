
 public class ch07Practice {

	public static void main (String [] args ) {
	
			//단일상속 : Java는 단일 상속만을 허용한다 ( C++ 은 다중상속 가능 ) 
	}
		
 }
 
 class Tv {
	 
	 boolean power;
	 int channel;
	 
	 void power () { }
	 void channelUp () {}
	 void channelDown () {}
	 
 }
 
 class VCR {
	 
	 boolean power;
	 int counter = 0;
	 
	 void power () {  power = !power; }
	 void play () { /* 내용생략*/ }
	 void stop () { /* 내용생략*/ }
	 void rew ()  { /* 내용생략*/ }
	 void ff ()      { /* 내용생략*/ }

	 } 
 
  class TVCR extends Tv {   //Tv의 자손 클래스 생성 (비중이 높은 클래스는 부모로 상속받음)
	  
	  VCR c = new VCR ();  // VCR클래스 포함 (다중상속이 불가능하기 때문에..)
	  
	  void play ( )  {
		  c.play();
	  }
	  
	  void stop () {
		  c.stop();
		  
	  }
	  
	  void rew () {
		  c.rew();
		  
	  }
	  
	  void ff () {
		  c.ff();
	  }
	  
  } 

// 자바는 다중상속을 허용하지 않으므로 Tv클래스를 조상으로 하고, VCR클래스는 TVCR 클래스에 포함시켰다. 그리고 TVC 클래스에 VCR 클래스의 메서드와 일치하는 선언부를 가진 메서드를 선언하고 내용은 VCR 클래스의 것을 호출해서 사용하도록 했다. 
// 외부적으로는 TVCR 클래스ㄹ의 인스턴스를 사용하는 것처럼 보이지만 내부적으로 VCR클래스의 인스턴스를 생성해서 사용하는 것이다 이렇게 함으로써 VCR클래스의 메서드의 내용이 변경되더라도 TVCR 클래스의 메서드들 역시 변경된 내용이 적용되는 결과를 얻을 수 있을 것이다.

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
	
 
