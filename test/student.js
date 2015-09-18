
var request = require('supertest'),
	should = require('should-http');

describe('student',function(){
	var url = 'localhost:5000';
	describe('find()',function(){
		it('should retrieve all student record', function(done){
			request(url)
				.get('/students')
				.end(function(err,res){
					if(err) throw err;
					res.should.have.status(200);
					res.body.should.be.an.instanceOf(Array);
					done();
				});
		});
	});

	describe('findOne()',function(){
		it('should retrieve one existing student record', function(done){
			request(url)
				.get('/students/2013-16040')
				.end(function(err,res){
					if(err) throw err;
					res.should.have.status(200);
					res.body.should.be.an.instanceOf(Object);
					done();
				});
		});
	});

	describe('insert()',function(){
		it('should return the newly created student record', function(done){
			request(url)
				.post('/students')
				.send({
					'studNo':'2016-10101',
					'name':'Luigi',
					'bdate':'1997-11-12'
				})
				.end(function(err,res){
					if(err) throw err;
					res.should.have.status(200);
					res.body.should.be.an.instanceOf(Object);
					res.body.should.have.properties({
						studNo : '2016-10101',
						name : 'Luigi',
						bdate : '1997-11-12'
					});
				done();
				});
		});
	});

});