describe('Some function tests: ', function() {
    it('#1 Simple', function(){
        var str = "ab__ab__", s1 = 'a', s2 = 'b';
        expect(dscount(str,s1,s2)).toEqual(2);
    });
    it('#2 Length symbols', function(){
        var str = "ab__ab__", s1 = 'aa', s2 = 'b';
        expect(dscount(str,s1,s2)).toEqual("ERROR 1: Length of input symbols must be equals 1");
    });
    it('#3 Length symbols', function(){
        var str = "ab__ab__", s1 = 'a', s2 = 'bb';
        expect(dscount(str,s1,s2)).toEqual("ERROR 1: Length of input symbols must be equals 1");
    });
    it('#4 Length symbols', function(){
        var str = "ab__ab__", s1 = 'aa', s2 = 'bb';
        expect(dscount(str,s1,s2)).toEqual("ERROR 1: Length of input symbols must be equals 1");
    });
    it('#5 UpperCase', function(){
        var str = "ab__ab__", s1 = 'A', s2 = 'b';
        expect(dscount(str,s1,s2)).toEqual(2);
    });
    it('#6 UpperCase', function(){
        var str = "ab__ab__", s1 = 'a', s2 = 'B';
        expect(dscount(str,s1,s2)).toEqual(2);
    });
    it('#7 UpperCase', function(){
        var str = "aB__Ab__", s1 = 'a', s2 = 'b';
        expect(dscount(str,s1,s2)).toEqual(2);
    });
    it('#8', function(){
        var str = "___cd__", s1 = 'c', s2 = 'd';
        expect(dscount(str,s1,s2)).toEqual(1);
    });
    it('#9', function(){
        var str = "de_____", s1 = 'd', s2 = 'e';
        expect(dscount(str,s1,s2)).toEqual(1);
    });
    it('#10', function(){
        var str = "12__12__1", s1 = '1', s2 = '2';
        expect(dscount(str,s1,s2)).toEqual(2);
    });
    it('#11', function(){
        var str = "__ba__", s1 = 'a', s2 = 'b';
        expect(dscount(str,s1,s2)).toEqual(0);
    });
    it('#12', function(){
        var str = "a__b__", s1 = 'a', s2 = 'b';
        expect(dscount(str,s1,s2)).toEqual(0);
    });
    it('#13', function(){
        var str = "-ab-ab-ab", s1 = 'a', s2 = 'b';
        expect(dscount(str,s1,s2)).toEqual(3);
    });
    it('#14', function(){
        var str = "-ab-ab-ab", s1 = '', s2 = '';
        expect(dscount(str,s1,s2)).toEqual("ERROR 2: Empty fields");
    });
    it('#15', function(){
        var str = "", s1 = 'a', s2 = 'b';
        expect(dscount(str,s1,s2)).toEqual("ERROR 2: Empty fields");
    });

});
