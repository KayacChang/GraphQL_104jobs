export default interface Job {
  jobType: string;
  jobNo: string;
  jobName: string;
  jobNameSnippet: string;
  jobRole: string;
  jobRo: string;
  jobAddrNoDesc: string;
  jobAddress: string;
  description: string;
  optionEdu: string;
  period: string;
  periodDesc: string;
  applyCnt: string;
  applyDesc: string;
  custNo: string;
  custName: string;
  coIndustry: string;
  coIndustryDesc: string;
  salaryLow: string;
  salaryHigh: string;
  salaryDesc: string;
  s10: string;
  appearDate: string;
  appearDateDesc: string;
  optionZone: string;
  isApply: string;
  applyDate: string;
  isSave: string;
  descSnippet: string;
  tags: string[];
  link: {
    applyAnalyze: string;
    job: string;
    cust: string;
  };
  jobsource: string;
  jobNameRaw: string;
  custNameRaw: string;
}
