export const MatchMakeItemsSchema = new SimpleSchema({
    teacherId: {label: "Teacher", type: String, regEx: SimpleSchema.RegEx.Id, defaultValue: null, optional: true},
    studentId: {label: "Student", type: String, regEx: SimpleSchema.RegEx.Id, defaultValue: null, optional: true},
    createdAt: {label: "Created", type: Date, optional: false}
});