class document {
	static int count = 0; 
	String name;    //문서명 (Doc name)
	
	document () {		
 		this ("제목없음" + ++count);		//문서 생성 시 이름을 넣지 않으면 나오는 폴더명, 생성자 같은 클래스의 다른 생성자를 호출할때 쓰는 this
	}
	
	document (String name) {
		this.name = name;  // 참조변수의 this
		System.out.println("문서 " + this.name + "가 생성되었습니다.");
	}
	
}
class ch06practice {
		
	public static void main (String [] args) { 
			
		document doc = new document ("제목없음");
		document doc1 = new document ("자바.txt");
		document doc2 = new document ();
		document doc3 = new document ();
	
	}
	  
}

	


  
