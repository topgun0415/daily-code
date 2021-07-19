import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.*;

public class Main {

	public static void main(String[] args) {
		
		//정규식 : 정규식을 이용하면 많은 양의 텍스트 파일 중에서 원하는 데이터를 손쉽게 뽑아낼 수도 있고 입력된 데이터가 형식에 맞는지 체크할수있다!
		
		String [] Data = { "bat", "baby", "bonus", "cA", "ca", "co", "cp", "c.", "c0", 
										"car", "combat", "count", "date", "disc"}	;
										
		Pattern P = Pattern.compile("c[a-z]*");
		
		for(int i = 0; i < Data.length; i++) {
				Matcher m = P.matcher(Data[i]);
				if(m.matches())
					System.out.print(Data[i] + ",");
		}
		
	}
	
}

  


