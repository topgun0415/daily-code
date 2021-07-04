import java.util.Arrays;

public class homework01 {

	public static void main(String[] args) {
		
		Sport a = new Sport ("족구");
		String [ ] name = {"예찬", "협", "성계", "수혁" };
		
		Member member = new Member (name, a);
		
		for (int i = 0; i <member. name.length; i++) {
			
			System.out.println(member.name[i]);
			
		}
			System.out.println(member.sp.sport);
	
	} 
	
}

class Member {
	
	String name [ ];
	Sport sp;
	
	Member(String name [], Sport sp ) {
		this.name = name ;
		this.sp = sp;
	}
}

class Sport {
	
	String sport;
		
	Sport (String sport) {
		this.sport = sport;
	}
}

