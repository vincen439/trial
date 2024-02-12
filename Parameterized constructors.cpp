# include <iostream>

using namespace std;

class integer
{
   private:
    int x,y;
   
   public:
   integer(int,int) ;
   integer();//constructor 2
   void display();
};
integer::integer(){
int a=0;
int b=1;
cout<<a<<endl;
cout<<b<<endl;
}

integer::integer(int a,int b){
   x=a;N
   y=b;
   

}
void integer::display () {
    cout <<"Values of a & b" <<endl;
    cout <<"a="<<" " <<x <<endl;
     cout <<"b="<<" " <<y  <<endl;
}

 int main()
{
    integer int1(9,7); //implicity constructor
    int1.display();
    integer int2=integer(1,5);// explicity constructor
     int2.display();
     integer in;
   
    return 0;
}