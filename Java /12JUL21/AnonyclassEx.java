public class ch07Practice {
	
	public static void main (String [] args) {
	
		Nember member = new Nember () {
			public void beMem () {
				add();
				System.out.println("당신은 클럽의" + count + "번째 맴버입니다.");
			}
		};
		member.beMem();
	
	}
	
}

abstract class Nember {
		int count = 10;
		public abstract void beMem ();
		public void add () { count ++; }
}
