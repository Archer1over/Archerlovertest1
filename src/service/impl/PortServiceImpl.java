package service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bean.Port;
import dao.PortDao;
import service.PortService;

@Service
public class PortServiceImpl implements PortService {

	@Autowired
	PortDao portDao;

	@Override
	public List<Port> selectAll() {
		List<Port> list = portDao.selectAll();
		return list;
	}

}
