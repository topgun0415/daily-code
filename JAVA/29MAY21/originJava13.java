
public class originJava13 {

	public static void main(String[] args) {
		
		// 반올림 - Math.round()
		
		double pi = 3.141592;
		System.out.println(pi);
		double shortpi = Math.round(pi * 1000);
		System.out.println(shortpi);
		System.out.println(shortpi/1000);
		System.out.println("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
				
        // 3.141을 얻으려면?
		
		pi = 3.141592;
        System.out.println(pi*1000);
		System.out.println((int)(pi*1000));
		System.out.println((int)(pi*1000) / 1000.0);

//	    double otherpi = Math.floor(pi * 1000) / 1000.0;
//	    System.out.println(otherpi);
		
		
		
		// 나머지 연산자
		int x = 8;
		int y = 10;
		System.out.println(y / x);  // 몫 값 
		System.out.println(y % x); // 나머지
		
		
		
		

	}

}
