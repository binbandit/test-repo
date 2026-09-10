# Nerilo lifecycle demo

This folder isolates the Nerilo demonstration from this repository's existing Git fixtures. Its pull requests target `nerilo/lifecycle-base-20260910` and run the `lifecycle` GitHub Actions check.

The demonstration exercises agent changes, PR feedback, failing CI, base updates, conflict resolution and autonomous squash merging. The daemon owns publication; agent containers receive no GitHub credentials.
