class TV {
	boolean power;
	int channel;
	
	void power () { power = !power; }
	void channelup () { ++channel; }
	void channeldown () { --channel; }
	
 class SmartTv extends TV {   // SmartTv에는 Tv에 캡션(자막)을 보여주는 기능을 추가함
	boolean caption; // 캡
	void displayCaption (String Text) { 
		if (caption) {	
			System.out.println(Text);
		}
		
	}
	
}

//상속 : 기존의 클래스로 새로운 클래스를 작성하는 것.  (코드의 재사용)
// 두 클래스를 부모와 자식으로 관계를 맺어주는 것

 public class ch07Practice {

	public static void main (String args []) {
	
		SmartTv ctv = new SmartTv ();
		ctv.channel = 7;		// 조상 TV class로부터 상속받은 맴버
		ctv.channelup();		// 조상 TV class로부터 상속받은 맴버
		System.out.println(ctv.channel);
		
		ctv.displayCaption("Hello, World");
		ctv.caption = true;  		//  캡션 (자막) 기능을 연다
		ctv.displayCaption("Hello World!");
	}
	
}	
				
