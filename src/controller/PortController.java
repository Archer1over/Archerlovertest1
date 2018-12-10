package controller;

import java.io.PrintWriter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import bean.Port;
import net.sf.json.JSONArray;
import service.PortService;

@Controller
public class PortController {
	@Autowired
	PortService portService;

	@RequestMapping("/find")
	public void selectByYandM(String year, String month, PrintWriter out) {
		List<Port> list = portService.selectAll();
		JSONArray json = JSONArray.fromObject(list);
		out.print(json);
	}

	@RequestMapping("/index")
	public ModelAndView showIndex() {
		ModelAndView mv = new ModelAndView("index");
		return mv;
	}

}
