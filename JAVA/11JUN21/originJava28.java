import java.util.*;
public class originJava28 {

	public static void main(String[] args) {
		
		System.out.println("당신의 연령대를 적어주십시오▽");
		System.out.println("(※ 예 : 20대, 40대)");
		Scanner scanner =  new Scanner (System.in);
		int Age = scanner.nextInt();
		
		
		switch (Age)
		{ 
		
		case 10: case 20:
			
			System.out.println("당신은 화이자 & 모더나 대상자 입니다.");
		
			break;
			
		case 30:case 40: case 50: case 60: case 70:
		
			System.out.println("당신은 아스트라제네카 & 얀센 대상자 입니다.");
			
			break;
			
		default:
		
			System.out.println("다시 입력부탁드립니다.");
			
	
		}

	}

}
