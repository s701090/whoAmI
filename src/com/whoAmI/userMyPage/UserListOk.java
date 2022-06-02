package com.whoAmI.userMyPage;

import java.io.IOException;
import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.whoAmI.action.Action;
import com.whoAmI.action.ActionForward;

import com.whoAmI.userMyPage.dao.UserListDAO;

public class UserListOk implements Action {

	@Override
	public ActionForward execute(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		HashMap<String, Integer> userMap = new HashMap<>();
		ActionForward af = new ActionForward();
		UserListDAO dao = new UserListDAO();
//		BoardDAO bDao = new BoardDAO();
//		MemberDAO mDao = new MemberDAO();

		//전체 게시글 개수
		int total = dao.getTotal();
//		int total = bDao.getTotal();
		//사용자가 요청한 페이지
		String temp = req.getParameter("page");
		//사용자가 요청한 페이지가 null이면 1페이지를,
		//null이 아니면 요청한 페이지를 page에 담아준다.
		int page = temp == null ? 1 : Integer.parseInt(temp);
		//한 페이지에 출력되는 게시글의 개수
		int rowCount = 4;
		//한 화면에 나오는 페이지 번호 수
		int pageSize = 4;
		
		//페이지에서 출력되는 게시글 중 첫번째 게시글의 인덱스
		int startRow = (page - 1) * rowCount;
		
		//화면에 출력되는 페이지 번호 중
		//시작 페이지(1, 11, 21, ....)
		int startPage = ((page - 1) / pageSize) * pageSize + 1;
		//끝 페이지(10, 20, 30, ...)
		int endPage = startPage + pageSize - 1;
		//실제 마지막 게시글이 출력되는 마지막 페이지 번호
		int realEndPage = (int)Math.ceil(total / (double)rowCount);
		

		endPage = endPage > realEndPage ? realEndPage : endPage;
		
		//DB에서 필요한 데이터를 Map에 담는다.
		userMap.put("startRow", startRow);
		userMap.put("rowCount", rowCount);
		System.out.println(dao.selectAll(userMap));
		req.setAttribute("userList", dao.selectAll(userMap));
//		req.setAttribute("boardList", boardDTO_list);
		//현재 페이지를 requestScope에 담아준다.
		req.setAttribute("page", page);
		req.setAttribute("startPage", startPage);
		req.setAttribute("endPage", endPage);
		req.setAttribute("realEndPage", realEndPage);
		req.setAttribute("total", total);
		af.setRedirect(false);
		af.setPath("/app/management/admin/userList.jsp");

		return af;
	}
	
}