public class ch07Practice {
	
	public static void main (String [] args) {
	
			A a = new A  ();   // a 참조변수에서 메서드 호출에 해당 객체 주소값만 입력하면(패치) 복잡하게 User의 제공받는 객체까지 바꿀 필요가없다
			a.autoPlay(new B());
			a.autoPlay(new C());
		
	}	
	
}

//User 
class A {
	void autoPlay(I i) {
		i.play();
	}
}

interface I {	//Interface 를 통해 User 것과 Provider 것을 일일이 다 고칠 필요가 없어진다.
	public abstract void play ();
}

//Provider
class B implements I {
	public void play () {
		System.out.println("Play in B class");
	}	
}

class C implements I {
	public void play () {
		System.out.println("Play in C class");
	}
}
