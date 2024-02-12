#include <iostream>
using namespace std;

class multiplication
{
	private:
		int a,b,c;
		a =6;
		b =7;
	public:
		int mul(){
			c =a*b;
			return c;
		}	
};

class B: private multiplication
{
	private;
	void display(){
		result =mul();
		
		
	}
};

int main (){
 B.b;
  cout <<"Results:" <<b.result <<endl;
		
	return 0;
}