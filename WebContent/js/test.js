$().ready(function(){

    $('.a').click(function(){
        $(this).parent().parent().hide();
        var s=$(this).prev().html();
    
        $('#bottom').append('<div class="lit"><p>'+s+'</P><a href="#" class="bottom">口</a></div>');
    });
    $('#bottom').on('click','.bottom',function(){
        var s=$(this).prev().html();
        $('.a').each(function(){
            if($(this).prev().html()==s){
                 $(this).parent().parent().show();
            }
        })
        $(this).parent().remove();
    })
    
    $.ajax({
    	url : "find.do",
		type : "post",
		dataType : "json",
		success:function(data){
			$.each(data,function(n,value){
				var list1 = echarts.init($('#one1')[0]);
				var list2 = echarts.init($('#one2')[0]);
				var list3 = echarts.init($('#one3')[0]);
				var list4 = echarts.init($('#two1')[0]);
				var list5 = echarts.init($('#three1')[0]);
				var list6 = echarts.init($('#four1')[0]);
				var list7 = echarts.init($('#five1')[0]);
				option1 = {
						 grid: {
						        left: '3%',
						        right: '4%',
						        bottom: '3%',
						        containLabel: true
						    },
					    xAxis: {
					        type: 'category',
					        boundaryGap: false,
					        data: ['One', 'Two', 'Three', 'Four', 'Five']
					    },
					    yAxis: {
					        type: 'value'
					    }, 
					    textStyle: {
					        fontSize: 1,
					    },
					    series: [{
					        data: [value.one, value.two, value.three, value.four, value.five],
					        type: 'line',
					        areaStyle: {}
					    }]
					};
				list1.setOption(option1);
				
				option2 = {
					    grid: {
					        left: '3%',
					        right: '4%',
					        bottom: '3%',
					        containLabel: true
					    },
					    xAxis: {
					        type: 'value',
					        boundaryGap: [0, 0.01]
					    },
					    yAxis: {
					        type: 'category',
					        data: ['One', 'Two', 'Three', 'Four', 'Five']
					    },
					    series: [
					        {
					            name: '',
					            type: 'bar',
					            data: [value.one, value.two, value.three, value.four, value.five]
					        }
					    ]
					};
				list2.setOption(option2);
				
				option3 = {
					    color: ['#3398DB'],
					    tooltip : {
					        trigger: 'axis',
					        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
					        }
					    },
					    grid: {
					        left: '3%',
					        right: '4%',
					        bottom: '3%',
					        containLabel: true
					    },
					    xAxis : [
					        {
					            type : 'category',
					            data : ['One', 'Two', 'Three', 'Four', 'Five'],
					            axisTick: {
					                alignWithLabel: true
					            }
					        }
					    ],
					    yAxis : [
					        {
					            type : 'value'
					        }
					    ],
					    series : [
					        {
					            
					            type:'bar',
					            barWidth: '60%',
					            data:[value.one, value.two, value.three, value.four, value.five]
					        }
					    ]
					};
				list3.setOption(option3);
				
				option4 = {
					    tooltip: {
					        trigger: 'item',
					        formatter: "{a} <br/>{b}: {c} ({d}%)"
					    },
					    legend: {
					        orient: 'vertical',
					        x: 'left',
					        data:['One', 'Two', 'Three', 'Four', 'Five']
					    },
					    series: [
					        {
					            name:'访问来源',
					            type:'pie',
					            radius: ['50%', '70%'],
					            avoidLabelOverlap: false,
					            label: {
					                normal: {
					                    show: false,
					                    position: 'center'
					                },
					                emphasis: {
					                    show: true,
					                    textStyle: {
					                        fontSize: '30',
					                        fontWeight: 'bold'
					                    }
					                }
					            },
					            labelLine: {
					                normal: {
					                    show: false
					                }
					            },
					            data:[
					                {value:value.one, name:'One'},
					                {value:value.two, name:'Two'},
					                {value:value.three, name:'Three'},
					                {value:value.four, name:'Four'},
					                {value:value.five, name:'Five'}
					            ]
					        }
					    ]
					};

				list4.setOption(option4);
				
				option5 = {
					    
					    tooltip : {
					        trigger: 'item',
					        formatter: "{a} <br/>{b} : {c} ({d}%)"
					    },
					    series : [
					        {
					            name: '访问来源',
					            type: 'pie',
					            radius : '55%',
					            center: ['50%', '60%'],
					            data:[
					                {value:value.one, name:'One'},
					                {value:value.two, name:'Two'},
					                {value:value.three, name:'Three'},
					                {value:value.four, name:'Four'},
					                {value:value.five, name:'Five'}
					            ],
					            itemStyle: {
					                emphasis: {
					                    shadowBlur: 10,
					                    shadowOffsetX: 0,
					                    shadowColor: 'rgba(0, 0, 0, 0.5)'
					                }
					            }
					        }
					    ]
					};
				list5.setOption(option5);
				
				option6 = {
					
					    tooltip: {
					        trigger: 'axis'
					    },
					   
					    grid: {
					        left: '3%',
					        right: '4%',
					        bottom: '3%',
					        containLabel: true
					    },
					    
					    xAxis: {
					        type: 'category',
					        data: ['One', 'Two', 'Three', 'Four', 'Five']
					    },
					    yAxis: {
					        type: 'value'
					    },
					    series: [
					        {
					            name:'Step Start',
					            type:'line',
					            step: 'start',
					            data:[value.one, value.two, value.three, value.four, value.five]
					        }
					    ]
					};
				list6.setOption(option6);
				
				option7 = {
					    
					    tooltip: {
					        trigger: 'item',
					        formatter: '{a} <br/>{b} : {c}'
					    },
					    
					    xAxis: {
					        type: 'category',
					        name: 'x',
					        splitLine: {show: false},
					        data: ['One', 'Two', 'Three', 'Four', 'Five']
					    },
					    grid: {
					        left: '3%',
					        right: '4%',
					        bottom: '3%',
					        containLabel: true
					    },
					    yAxis: {
					        type: 'log',
					        name: 'y'
					    },
					    series: [
					        {
					            name: '',
					            type: 'line',
					            data: [value.one, value.two, value.three, value.four, value.five]
					        }
					    ]
					};

				
				list7.setOption(option7);


			})
		}
    })

})