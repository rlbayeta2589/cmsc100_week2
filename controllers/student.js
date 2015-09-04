var db = require(__dirname+'/../lib/mysql');

exports.find = function(req, res, next){
	db.query('select * from student',
		function(err,rows){
			if(err) return next(err);
			else res.send(rows);
	});
};

exports.findOne = function(req, res, next){
	db.query('select * from student where studNo=?',[req.params.id],
		function(err,rows){
			if(err) return next(err);
			if(rows.length===0)
				res.status(404).send("Student not Found");
			else
				res.send(rows);
	});
};

exports.update = function(req, res, next){
	db.query('update student set ? where studNo=?',[req.body,req.params.id],
		function(err,rows){
			if(err) return next(err);
			if(rows.length===0)
				res.status(404).send("Student not Found");
			else
				res.send(rows);
	});
};
exports.insert = function(req, res, next){
	db.query('insert into student values(?,?,?)', [req.body.studNo,req.body.name,req.body.bdate],
		function(err,rows){
			if(err) return next(err);
			else res.send(rows);
	});
};

exports.remove = function(req, res, next){
	db.query('delete from student where studNo=?',[req.params.id],
		function(err,rows){
			if(err) return next(err);
			if(rows.length===0)
				res.status(404).send("Student not Found");
			else
				res.send(rows);
	});
};