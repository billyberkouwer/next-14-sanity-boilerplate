import { client } from "../../../sanity/config/client";

export default async function NavBar() {
  const projects = await client.fetch<any>(`*[_type == "project"]`);

  return (
    <nav>
      <ul>
        <li>Billy Myles-Berkouwer</li>
        <li>
          selected projects
          <ul>
            {projects.map((project: any) => (
              <li key={project.projectTitle}>{project.projectTitle}</li>
            ))}
          </ul>
        </li>
        <li>experiments</li>
        <li>info</li>
      </ul>
    </nav>
  );
}
