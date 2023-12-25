export const getData = async function (state) {
  const res = await fetch(
    "https://6589784c324d417152590568.mockapi.io/projects"
  );
  const projects = await res.json();
  state(projects);
};
