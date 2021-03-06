import * as assert from 'assert';
import { Finding } from '../Finding';
import { Project } from '../model';
import { FN003001_CFG_schema } from './FN003001_CFG_schema';

describe('FN003001_CFG_schema', () => {
  let findings: Finding[];
  let rule: FN003001_CFG_schema;

  beforeEach(() => {
    findings = [];
    rule = new FN003001_CFG_schema('test-schema');
  })

  it('doesn\'t return notification if schema is already up-to-date', () => {
    const project: Project = {
      path: '/usr/tmp',
      configJson: {
        $schema: 'test-schema',
        version: '2.0',
        bundles: {}
      }
    };
    rule.visit(project, findings);
    assert.equal(findings.length, 0);
  });
});