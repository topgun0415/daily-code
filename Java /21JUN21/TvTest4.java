import java.util.Arrays;

public class Tvtest4 {
	

	public static void main(String[] args) {
		
		// 모든 배열이 그렇듯이 객체 배열도 같은 타입의 객체만 저장할 수 있다. 그러면, 여러 종류의 객체를 하나의 배열에 저장할 수 있는 방벙은 없을까?
		
		Tv [ ] tvArr = new Tv [3];  // 길이가 3인 Tv객체 배열
		
		// Tv 객체를 생성해서 Tv 객체 배열의 각 요소에 저장
		
		for(int i = 0; i < tvArr.length; i++)
		{
				tvArr[i] = new Tv();
				tvArr[i].channel = i + 10; // 
		}
		
		for (int i = 0; i < tvArr.length; i++)
		{
				tvArr[i].channelUp();  // tvArr.[i]의 메서드를 호출. 채널이 1씩 증가
				System.out.printf("tvArr[%d].channel=%d%n", i, tvArr[i].channel);
				
			
		}
		
	}   // Main's over

}
	
		class Tv 
		{
			String color;
			int channel;
			boolean power;
			
			void power();   { power = !power; }
			void channelUp(); { ++channel; }
			void channelDown(); { --channel; }
	
			
		}
