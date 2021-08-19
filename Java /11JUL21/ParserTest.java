
public class ch07Practice {
	
	public static void main (String [] args) {
			
		Parseable parser = ParserManager.getParser("XML");  // Parseable parser = new XMLParser(); 동일
		parser.parse("document.xml");
		parser = ParserManager.getParser("HTML");  // Parseable parser = new HTMLParser(); 동일 
		parser.parse("document2.html");
		
		
	}
	
}


// ★ 리턴타입이 인터페이스라는 것은 메서드가 해당 인터페이스를 구현한 클래스의 인스턴스를 반환한다는 것을 의미한다.
		
interface Parseable {
	//구문 분석작업을 수행한다.
	/*public abstract*/ void parse(String fileName);
}

class ParserManager {
	//리턴타입이 Parseable 인터페이스다.
	public static Parseable getParser(String type) {
		if (type.equals("XML")) {
				return new XMLParser ();
				
		} else {
				Parseable p = new HTMLParser ();
				return p;
				// return new HTMLParser ();
			
		}
	}
}

class XMLParser implements Parseable {
		public void parse (String fileName) {
			/*구문 분석작업을 수행하는 코드를 적는다. */
			System.out.println(fileName + " - XML parsing completed.");
		}
}
				
class HTMLParser implements Parseable {
		public void parse (String fileName) {
			/*구문 분석작업을 수행하는 코드를 적는다. */
			System.out.println(fileName + "- HTML parsing completed.");	
		}
}

	
// interface에 대한 이해도 부족으로 나중에 다시 볼 필요가 있음
