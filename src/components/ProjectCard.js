import { Col } from "react-bootstrap";

export const ProjectCard = ({ link, description, imgUrl,url, repo }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4><a href={url} target="_blank">{link}</a></h4>
          <span>{description}</span>
          <hr/>
          <h6><a href={repo} target="_blank">Code-Repo</a></h6>
        </div>
      </div>
    </Col>
  )
}
