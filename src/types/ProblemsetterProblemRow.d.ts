export { };
declare global {
  interface ProblemsetterProblemRow {
    id: number;
    name: string;
    publishDate: string;
    acceptedSubmissions: number;
    numberOfSubmissions: number;
  };
}