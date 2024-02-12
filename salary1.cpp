#include <iostream>
using namespace std;

class person
{
	   char *name;
    	double salary;
public:
	person (){
		cout <<"enter your name?" <<endl;
		cin >> name;
		
		salary =0;
	}
	
		//parameter construction
    person (double s){
		salary=10000;
	}
	//copy constructer
	person(person &t){
		name =t.name;
		salary =t.salary;
	}
	void output(){
		cout <<name << salary <<" " <<endl;
	}
		
};
int main (){
	 person a();
	 person b();
	 person c();
	
	 return 0;
 }
	 