
public class InstanceofTest {

	public static void main(String[] args) {
		
		Q q = new Q ();
		q.Method(new Y());    // 매개변수에 따라 출력값이 달라짐. 
		
	}
}

class Q {
	public void Method (Z z) {
		z.Method();
	}
}

interface Z {
	 void Method (); 
}


class Y implements Z {
	public void Method () {
		System.out.println("Method Y processed ");
	}
}

class T implements Z {
	public void Method () {
		System.out.println("Method C processed ");
	}
	
}
